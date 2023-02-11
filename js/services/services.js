const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  return await res.json();
};

//Получение данных с json-server с помощью promise(async, await). За основу взяты классы
const getResourse = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }

  return await res.json();
};

export { postData, getResourse };
