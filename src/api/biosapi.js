const BIOS_ENDPOINT = "https://63c87820075b3f3a91e1846e.mockapi.io/bios";


export async function fetchBios() {
  try {
    const response = await fetch(BIOS_ENDPOINT);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}



