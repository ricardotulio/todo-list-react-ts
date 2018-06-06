import * as React from "react";

export interface IHelloProps {
  readonly compiler: string;
  readonly framework: string;
}

const prop = (name: string) => (obj: any) => obj[name];

const compiler = prop("compiler");

const framework = prop("framework");

export const Hello = (props: IHelloProps) => (
  <h1>Hello from {compiler(props)} and {framework(props)}!</h1>
);
