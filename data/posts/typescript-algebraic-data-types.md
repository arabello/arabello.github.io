On November 11th 2023, [we](https://buildo.com/) hosted the [Scala Italy](https://www.scala-italy.it/) meetup in our Milan’s office. A talk by [Nicolas Rinaudo](https://nrinaudo.github.io/) titled _["Far more than you’ve ever wanted to know about ADTs”$^{1}$](https://www.scala-italy.it/speakers/nicolas-rinaudo)_ grabbed my attention. Algebraic Data Types (ADT) is a noteworthy concept in Software Engineering, particularly in functional programming and type theory. Thanks to this presentation, I better realized its effectiveness on a more pragmatic level.

At the same time I was looking deeper into Typescript’s type system, so I asked myself:

> “How Generalized Algebraic Data Types (GADT) and Pattern Matching would look like in Typescript?”

This post aims to answer it. Keep in mind, it's not a deep theoretical analysis, but an attempt for a practical insight on ADTs and Pattern Matching.

As a toy case study, we model a naive payment transactions system with the following assumptions:

- Transaction-specific commands: `validate` and `process`
- A command to alert users: `notify`
- A transaction may be in `unprocessed` or `processed` status.

---

## ADT Fundamentals

Let's quickly recall the basic ADT concepts$^{2}$ before starting coding.

A _sum type_ is a disjoint union of values (sets). In plain words, the sum of a given two or more types is a set containing the values of one of the component types. Essentially, it is like a logical `OR` (disjunction) between types.

```
Sum(A, B) = A OR B
```

It expresses the _alternation_ of the component types: `A` or `B` , but not both.

The simplest sum type we can think of is `boolean` which is the sum type of `true` and `false` .

- `true` is a set containing a single value
- `false` is a set containing a single value
- `boolean` is a set containing either the `true` or `false` value

```
boolean = true OR false
```

Why “_sum”_ type? Because its cardinality (number of possible values) is the algebraic _sum_ of the cardinalities of its component types.

```
Boolean_cardinality = true_cardinality + false_cardinality = 1 + 1 = 2
```

A _product_ type is compounded structure containing values of various types. In plain words, the product of a given two or more types is a collection of all the component types. Essentially, it is like a logical `AND` (conjunction) between types.

```
Product(A, B) = A AND B
```

It corresponds to the Cartesian product in set theory and it expresses the _combination_ of the component types: `A` and `B` together.

`tuple` and `records` data structures are examples of product types.

```
BooleanTuple = [Boolean, Boolean]
```

Why “_product”_ type? Because its cardinality (number of possible values) is the algebraic _product_ of the cardinalities of its component types. For instance, variables of `BooleanTuple` type can assume 4 values

```tsx
[true, false]
[false, true]
[true, true]
[false, false]
```

as

```tsx
BooleanTuple_cardinality = Boolean_cardinality * Boolean_cardinality = 2 * 2 = 4
```

An Algebraic Data Type (ADT) is a potentially recursive sum type of product types, ie. an arbitrary structure repeatedly combining sum and products types. For instance:

```
ADT = A OR (C AND D) OR {nested: ADT}
```

We are now ready to see how these concepts apply in Typescript, but first a little disclaimer on formality:

> In languages with a nominal type system like Scala, defining a sum or product type produces _new_ types with a new set of potential values. Therefore, the above formal definitions \*\*\*\*are valid at implementation level.

Instead, in a structural type system, all possible values already exist: new types merely define sub-sets. Therefore, we cannot create sum or product types in Typescript as per formal definitions: we can only describe already existing _nominal_ types. Nevertheless, from a practical standpoint, we can define types _acting like_ the sum and product types \*\*and still fully meet our objectives.

>

---

## Basic ADT

In Typescript, the union `|` type operator creates a disjoint (discriminated) union between types. It's a useful tool for shaping our transaction commands.

```tsx
type Command = "validate" | "process" | "notify";
```

Given a value of standard union type, the compiler cannot infer, without type guards, which of the component type is at a given moment.

A _discriminator_ field, ie. a literal type property, helps the compiler to differentiate between the variants. Such types are known as _tagged unions$^{3}$_ and they qualify as _sum types._

```tsx
type Command = { _type: "validate" } | { _type: "process" } | { _type: "notify" };
```

Commands may require extra details to carry out their tasks. For instance:

```tsx
export type Command =
  | { _type: "validate"; transactionId: string }
  | { _type: "process"; transactionId: string }
  | { _type: "notify"; userId: string };
```

The `Command` type acts as contract with the outside world; consumers may use constructors to create commands with ease, for example:

```tsx
export const validate = (transactionId: string): Command => ({
  _type: "validate",
  transactionId: "<uuid>",
});
```

Suppose we intend to combine or _chain_ commands like `validate` and `process`. How can we set this up?

We can extend the `Command` definition with a new compounded type acting as a container for commands themselves.

```tsx
export type Command =
  | { _type: "validate"; transactionId: string }
  | { _type: "process"; transactionId: string }
  | { _type: "notify"; userId: string }
  | { _type: "chain"; _cmd1: Command; _cmd2: Command };
```

The `chain` container acts as a _product type_ enabling the recursively combination of `Command` values, even another `chain`. We notice that `Command` is now an ADT because it is:

- a recursive
- sum type
- of product types

---

# Pattern Matching

Suppose an arbitrary state for our transactions system

```tsx
type State = {
  /** */
};
```

and a function that computes the new state based on a `Command` used to execute the system business logic.

```tsx
const nextState = (prev: State, command: Command): State => {
  /** */
};
```

Our goal is to provide a skeleton for `nextState` implementation, ensuring that:

- The `Command` type is properly discriminated and narrowed, allowing safe data access for each command according to its type.
- Logical branches should be fully exhausted, meaning that `Command` cases must be precisely recognized and managed at compile time. If a new command is added or removed without a proper handling, a compile error should be raised.

## Naive switch

We can begin in the simplest way by applying a switch statement to the discriminator field.

```tsx
const nextState = (prev: State, command: Command): State => {
  switch (command._type) {
    case "validate":
      command.userId; // compile time error
      return prev;
    case "process":
      // ...
      return prev;
    case "notify":
      // ...
      return prev;
    case "chain":
      // ...
      return prev;
  }
};
```

The `command` type is narrowed within each branch. For example, trying to access the `userId` property inside the `validate` case results in a compilation error.

```
Property 'userId' does not exist on type '{ _type: "validate"; transactionId: string; }'. ts(2339)
```

This meets our first goal. Now, let’s add a new `Command` component type.

```tsx
export type Command =
  // [...]
  { _type: "newCommand" };
```

The compiler raises an error on the `nextState` function

```
Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
```

stating that the function’s return type can be `State | undefined` due to the switch statement being _non_-exhaustive. The error is raised as a mismatch between the declared and the inferred return type.

We may drop the explicit declaration, but we would move the responsibility of a producer’s change to the consumer!

```diff
- const nextState = (prev: State, command: Command): State => { /** */ }
+ const nextState = (prev: State, command: Command) => { /** */ }
---	 ^ inferred return type is State | undefined
```

```tsx
// Consumer
const newState: State = nextState(prevState, validate("123"));
//	^ Type 'State | undefined' is not assignable to type 'State'.
//		Type 'undefined' is not assignable to type 'State'.ts(2322)
```

Additionally, there are other limitations when working with the native switch. For example

- The inability to use logical operators in the case statement. The reason being, the logical expressions are evaluated before being compared to the switch value.
- It does not restrict developers from duplicating a branch because the switch statement only compares values.

```tsx
const nextState = (prev: State, command: Command): State => {
  switch (command._type) {
    case "validate" || "process": // ⛔️ Always "validate"
      // ...
      return prev;
    case "process":
      // ...
      return prev;
    case "process": // ⛔️ Duplicated branch: compiler won't complain
      // ...
      return prev;
    case "notify":
      // ...
      return prev;
    case "chain":
      // ...
      return prev;
  }
};
```

With reference to our secondary objective, the resulting developer experience and potential side effects isn't great. Is there room for improvement?

## Third Party Pattern Matching

[Pattern matching is a mechanism for checking a value against a pattern](https://docs.scala-lang.org/tour/pattern-matching.html). A successful match can also _deconstruct_ a value into its constituent parts.

Unfortunately, Typescript does not _yet_ (🤞) provide a native pattern matching, but we can rely on third-party libraries.

The one I am most content with is [](https://github.com/gvergnaud/ts-pattern)_ts-pattern._ I would not dive into the syntax and mechanisms of the library: it is pretty intuitive and its [documentation](https://github.com/gvergnaud/ts-pattern) is well-written. I would focus on the benefits of using _ts-pattern_.

Let’s refactor `nextState`.

```tsx
import { match } from "ts-pattern";

type State = {
  /** */
};

const nextState = (prev: State, command: Command): State =>
  match(command)
    .with({ _type: "validate" }, (cmd) => {
      // ...
      return prev;
    })
    .with({ _type: "process" }, (cmd) => {
      // ...
      return prev;
    })
    .with({ _type: "notify" }, (cmd) => {
      // ...
      return prev;
    })
    .with({ _type: "chain" }, (cmd) => {
      // ...
      return prev;
    })
    .exhaustive();
```

Similarly as before

- we are discriminating over the `_type` field by matching on a portion of the command object
- the `cmd` variable is properly narrowed
- branches are exhaustive

If we remove the `notify` command branch we get an error on the `exhaustive` call

```
This expression is not callable.
	Type 'NonExhaustiveError<{ _type: "notify"; userId: string; }>' has no call signatures.ts(2349)
```

with a pretty straightforward description.

Note that the error is locally raised inside the function, even if we remove the return type declaration! I want to underlying this fact from an architectural point of view as a difference compared to the previous usage of switch statement. What if the `nextState` function firm is a software module boundary that other parts of our architecture depends on? Should adding, removing, or updating a command indirectly impacts how the consumers use the function?

In this way the contract with the outside world is stable even if the producer makes internal changes _and_ the function firm is not explicitly declared. Instead of placing the burden of boundary responsibility on the developer, who may choose not to declare the return type, we're making better use of the type system inference.

```diff
- const nextState = (prev: State, command: Command): State => { /** */ }
+ const nextState = (prev: State, command: Command) => { /** */ }
---	    ^ inferred return type is State | undefined
--- compile error inside nextState
```

```tsx
// Consumer
const newState: State = nextState(prevState, validate("123"));
//	✅ No error
```

Additionally, _ts-pattern_ addresses the limitations found previously

```tsx
const nextState(prev: State, command: Command): State =>
	match(command)
	.with({ _type: P.union("validate", "process") }, (cmd) => { // ✅ Logic OR
	  // ...
	  return prev;
	})
	.with({ _type: "notify" }, (cmd) => {
	  // ...
	  return prev;
	})
		.with({ _type: "notify" }, (cmd) => {.					  // ✅ Compile error raised on duplicated branch
	  // ...
	  return prev
	})
	.with({ _type: "chain" }, (cmd) => {
	  // ...
	  return prev;
	})
	.exhaustive();
```

_ts-pattern_ offers lots of other [features](https://github.com/gvergnaud/ts-pattern?tab=readme-ov-file#features), I heartily suggest looking into them.

# Generalized ADT for safe composition

Let’s encode the status of transactions in our system

```tsx
export type Status = "unprocessed" | "processed";
```

and how a command modifies a transaction’s status.

```tsx
export type Command<B extends Status, A extends Status> =
  | { _type: "validate"; _before: B; _after: A; transactionId: string }
  | { _type: "process"; _before: B; _after: A; transactionId: string }
  | { _type: "notify"; _before: B; _after: A; userId: string }
  | {
      _type: "chain";
      _before: B;
      _after: A;
      _cmd1: Command<B, Status>;
      _cmd2: Command<Status, A>;
    };
```

The `B` (Before) and `A` (After) parametric types indicate that a command can be used on a transaction possessing a specific `Status` (`_before`) and results in a transaction with an identical or different `Status` (`_after`). When parametric types are describing properties of a sum type, they are referred to as _witness_ types$^{4}$: they enable the ADT types refinement at construction time.

In other words, we can now impose stricter constraints for parametric types in the constructors to refine our ADT$^{5}$. This results in a _Generalized ADT_: a sum type with one or more witness types, each featuring type equality.

Assume that

- `validate: "unprocessed" -> "unprocessed"`
- `process: "unprocessed" -> "processed"`
- `notify: "processed" -> "processed"`

we refactor our constructors to _refine_ the status transition per each type variant, for example

```tsx
export const validate = (transactionId: string): Command<"unprocessed", "unprocessed"> => ({
  _type: "validate",
  _before: "unprocessed",
  _after: "unprocessed",
  transactionId,
});
```

However, if we use the constructor

```tsx
export const y: Command<"unprocessed", "unprocessed"> = validate("1");
y._type; // "validate" | "process" | "notify" | "chain"
y._before; // "unprocessed"
y._after; // "unprocessed"
```

we notice that the `_type` discriminating property is not correctly narrowed due to the lack of connection between `_type`, `_before` and `_after` of each `Command` component type.

Dually, in the `nextState` function refactored with the new `Command`

```tsx
const nextState = (prev: {}, command: Command<Status, Status>) =>
  match(command)
    .with({ _type: "validate" }, (cmd) => {
      cmd._before; // Status
      cmd._after; // Status
    })
    .with({ _type: "process" }, (cmd) => {})
    .with({ _type: "notify" }, (cmd) => {})
    .with({ _type: "chain" }, (cmd) => {
      nextState(prev, cmd._cmd1);
      nextState(prev, cmd._cmd2);
    })
    .exhaustive();
```

the `_before` and `_after` properties are not narrowed based on the discriminating `_type` field.

Another relevant issue is that the `chain` command constructor

```tsx
export const chain = (
  cmd1: Command<Status, Status>,
  cmd2: Command<Status, Status>,
): Command<Status, Status> => ({
  _type: "chain",
  _before: cmd1._before,
  _after: cmd2._after,
  _cmd1: cmd1,
  _cmd2: cmd2,
});
```

allows to compose two transactions of _any_ status. For example, the type system allows for

```tsx
const x: Command<Status, Status> = chain(validate("1"), notify("1"));
```

even though `validate` ending status is not compatible with the `notify` starting status.

Can we improve our solution? Yes, with safe composition.

Firstly, let’s introduce `CommandType` as a domain helper and refactor our `Command` type as follows.

```tsx
export type CommandType = "validate" | "process" | "notify" | "chain";

export type Command<
  C extends CommandType = CommandType,
  B extends Status = Status,
  A extends Status = Status,
> = {
  _type: C;
  _before: B;
  _after: A;
} & (
  | {
      _type: "validate";
      _before: "unprocessed";
      _after: "unprocessed";
      transactionId: string;
    }
  | {
      _type: "process";
      _before: "unprocessed";
      _after: "processed";
      transactionId: string;
    }
  | {
      _type: "notify";
      _before: "processed";
      _after: "processed";
      userId: string;
    }
  | {
      _type: "chain";
      _before: Status;
      _after: Status;
      _cmd1: Command<CommandType, B, Status>;
      _cmd2: Command<CommandType, Status, A>;
    }
);
```

By binding (imposing a connection) between `_type` , `_before` and `_after`, the sum type variants will be correctly discriminated when a value is assigned to the field discriminator or to the witness fields.

```tsx
const y = validate("1");
y._type; // "validate"
y._before; // "unprocessed"
y._after; // "unprocessed"

const nextState = (prev: {}, command: Command) =>
  match(command)
    .with({ _type: "validate" }, (cmd) => {})
    .with({ _type: "process" }, (cmd) => {
      cmd._before; // "unprocessed"
      cmd._after; // "processed"
    })
    .with({ _type: "notify" }, (cmd) => {})
    .with({ _type: "chain" }, (cmd) => {
      nextState(prev, cmd._cmd1);
      nextState(prev, cmd._cmd2);
    })
    .exhaustive();
```

We can also enforce the chain constructor to accept only commands with a compatibile ending-starting status, ie. _composable_ commands, even though the `Command`'s `chain` subtype allows for _any_ transition `Status`.

```tsx
type Chain<B extends Status, A extends Status> = Command<"chain", B, A>;
const chain =
  <B extends Status, T extends Status>(cmd1: Command<CommandType, B, T>) =>
  <A extends Status>(cmd2: Command<CommandType, T, A>): Chain<B, A> => ({
    _type: "chain",
    _before: cmd1._before,
    _after: cmd2._after,
    _cmd1: cmd1,
    _cmd2: cmd2,
  });
```

For example,

```tsx
const x = chain(validate("1"))(chain(process("1"))(process("1")));
```

would generate a compile error as the chain `validate -> process -> process` is not valid: `process` ends with a `processed` status, so only a `notify` command can follow.

Note that the resulting `_before` and `_after` properties take in account the entire nested `chain` of commands

```tsx
const x = chain(validate("1"))(chain(process("1"))(notify("1")));
x._type; // chain
x._before; // "unprocessed"
x._after; // "processed"
```

# When should I use GADT?

Essentially, GADTs allow for constrains on type parameters based on the value constructor, enabling ADT’s returned value type refinement. Pattern Matching is a side tool working elegantly and safely with GADTs/ADTs. They can be extremely effective in a variety of scenarios, including but not limited to:

- Compilers or interpreters Abstract Syntax Trees
- Building domain-specific languages
- Modeling systems and transitions state
- Complex data structure manipulation and safe composition

Generally speaking, GADTs/ADTs should be considered whenever we want the type system to ensure safety, correctness and expressiveness of our solution.

However, they add complexity that must be weighed against their benefits as they might not be helpful or even harmful. If your application is simple and small enough, setting up a GADT or an ADT could be more expensive than the advantages they come with. For example,

- when extensibility is not an issue as you are building a system that is unlikely to expand (you can always refactor it afterwards, thus saving certain upfront costs).
- when you are designing something to be thrown away, eg. proof of concepts or early MVPs

Deciding whether to use a GADT/ADT at design time is not always easy. A common approach is to first outline your system, and then evaluate if a GADT/ADT option emerges from the needs.

---
*All code available [here](https://github.com/arabello/ts-gadt).*

1. [https://nrinaudo.github.io/far-more-adt](https://nrinaudo.github.io/far-more-adt)
2. [https://github.com/gcanti/talks/blob/master/talks/adt/adt.md](https://github.com/gcanti/talks/blob/master/talks/adt/adt.md)
3. [https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#tagged-union-types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#tagged-union-types)
4. [https://wiki.haskell.org/Type_witness](https://wiki.haskell.org/Type_witness)
5. [https://v2.ocaml.org/manual/gadts-tutorial.html](https://v2.ocaml.org/manual/gadts-tutorial.html)
