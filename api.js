const apiBaseUrl = "";

const getData = async (endpoint) => {
  try {
    const response = await fetch(`${apiBaseUrl}${endpoint}`);
    if (!response.ok)
      throw new Error(`GET ${endpoint} failed: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error in getData:", error);
  }
};

const postData = async (endpoint, data) => {
  try {
    const response = await fetch(`${apiBaseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok)
      throw new Error(`POST ${endpoint} failed: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error in postData:", error);
  }
};

const putData = async (endpoint, data) => {
  try {
    const response = await fetch(`${apiBaseUrl}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok)
      throw new Error(`PUT ${endpoint} failed: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error in putData:", error);
  }
};

const deleteData = async (endpoint) => {
  try {
    const response = await fetch(`${apiBaseUrl}${endpoint}`, {
      method: "DELETE",
    });
    if (!response.ok)
      throw new Error(`DELETE ${endpoint} failed: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error in deleteData:", error);
  }
};
