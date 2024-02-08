export async function load({ fetch }) {
  const req = await fetch("https://gutendex.com/books/?languages=ja");
  const res = await req.json();

  return {
    articles: res.results,
  };
}
