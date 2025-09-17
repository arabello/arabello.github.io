import { useCallback } from "react";

export function useFormatters() {
  const formatDate = useCallback(
    (date: Date) =>
      date.toLocaleDateString(undefined, {
        month: "long",
        year: "numeric",
      }),
    [],
  );

  return { formatDate };
}
