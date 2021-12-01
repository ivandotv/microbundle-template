export function demo(): void {
  if (__DEV__) {
    console.log('this should show only in development build')
  }
  console.log(__VERSION__)
}
demo()
