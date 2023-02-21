export class SwimlanePlugin {
  requestWillFetch = async ({ request, event, state }) => {
    console.log(request)
    return new Request(request, {
      // this has no effect if request.mode === 'no-cors'
      // https://developer.mozilla.org/en-US/docs/Web/API/Request/mode#value
      headers: {
        'x-foo': 'bar',
        'x-qux': 'baz',
      },
    });
  };
}
