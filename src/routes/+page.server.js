export async function load({ platform }) {
  const res = await platform?.env.DB.prepare("SELECT * FROM Todos ORDER BY created").run();

  return {
    todos: res?.results ?? [],
  };
}

export const actions = {
  create: async ({ request, platform }) => {
    const data = await request.formData();

    platform?.env.DB.prepare("INSERT INTO Todos (content, status) VALUES (?, ?)")
      .bind(data.get("content"), "new")
      .run();
  },

  delete: async ({ request, platform }) => {
    const data = await request.formData();
    platform?.env.DB.prepare("DELETE FROM Todos WHERE id = ?").bind(data.get("id")).run();
  },
};
