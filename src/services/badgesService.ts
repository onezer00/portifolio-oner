export async function getBadges() {
  try {
    const res = await fetch('https://credly-worker.oner-backend.workers.dev/api/badges');
    if (!res.ok) throw new Error('Erro ao buscar badges do worker');
    return res.json();
  } catch (e) {
    // fallback local (opcional)
    // const res = await fetch('/api/badges');
    // return res.json();
    throw e;
  }
}
