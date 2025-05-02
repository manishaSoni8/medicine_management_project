const medicineLoader = async () => {
    const response = await fetch(" https://drug-management-344af-default-rtdb.firebaseio.com/dashboards/1/.json");
    if (!response.ok) throw new Error("Failed to fetch medicine data");
    const data = await response.json();
    return data.values || [];
  };
  export default medicineLoader;