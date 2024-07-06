export const truncateString = (sentence: string, maxwidth: number): string => {
  if (sentence.length > maxwidth) {
    return sentence.split('').splice(0, maxwidth).join('') + '...';
  }
  return sentence;
};

export const fetchGeneric = async (url: string, method: string = 'GET', body: FormData | null = null) => {
  try {
    const options: RequestInit = {
      method: method,
      headers: {},
      body: body instanceof FormData ? body : JSON.stringify(body),
    };

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
