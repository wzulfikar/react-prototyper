declare module "@storybook/react" {
  export function storiesOf(storyName: string, module: any): any
  export function addDecorator(fn: (story: string, ctx: any) => any): any
}

declare module "@storybook/addon-actions" {
  export function action(name: string, ...params: any[]): any;
}

declare module "@storybook/addon-info" {
  export function withInfo(...params: any[]): any;
}