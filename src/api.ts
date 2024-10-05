interface Category {
  id: number;
  name: string;
}

interface Tags {
  id: number;
  name: string;
}

interface Pet {
  category: Category;
  id: number;
  name: string;
  photoUrls: string[];
  status: string;
  tags: Tags[];
}

function getPetsPromise(): Promise<Pet[]> {
  return fetch(
    "https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Promise:", data);
      return data;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
}

getPetsPromise();

async function getPetsAsync(): Promise<Pet[]> {
  try {
    const response = await fetch(
      "https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available"
    );
    if (!response.ok) {
      console.log("Error network");
      return Promise.reject("Network error");
    }
    const data = await response.json();
    console.log("Async Await:", data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

getPetsAsync();
