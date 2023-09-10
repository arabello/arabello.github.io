import { Card } from "./Card";

type ImageProps = {
  width: number;
  height: number;
};

type Props = {
  heading: string;
  subheading: string;
  avatar: (size: ImageProps) => JSX.Element;
  icon: (size: ImageProps) => JSX.Element;
};

export const HeaderCard = (props: Props) => (
  <Card>
    <div className="d-flex align-items-center gap-3">
      <div
        style={{ width: 80, height: 80, fontSize: 56 }}
        className="text-center"
      >
        {props.avatar({ width: 80, height: 80 })}
      </div>

      <div className="flex-grow-1 me-3">
        <div className="d-flex align-items-center">
          <div className="fs-3 fw-bold text-primary flex-grow-1">
            {props.heading}
          </div>
          <div style={{ width: 24, height: 24 }} className="text-center">
            {props.icon({ width: 24, height: 24 })}
          </div>
        </div>
        <div className="fs-6 fw-light text-muted">{props.subheading}</div>
      </div>
    </div>
  </Card>
);
