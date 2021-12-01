export function demo(): void {
  if (__DEV__) {
    console.log('this should show only in development build')
  }
  console.log(__VERSION__)
}
demo()

// @ts-expect-error - test code removal
function not_used(): void {
  console.log('this should not be present after minification')
}
