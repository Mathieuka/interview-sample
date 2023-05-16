export function curry(callback: (...args: number[]) => any) {
  return function curriedFn(...args: number[]): any {
    if (!args.length) {
      return callback();
    }

    return (...otherArgs: number[]): number[] => {
      if (!otherArgs.length) {
        return curriedFn(...args, ...otherArgs);
      }
      return callback(...args);
    };
  };
}
