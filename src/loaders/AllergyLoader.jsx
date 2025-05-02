export const allergyLoader = async () => {
    try {
        const response = await fetch(" https://drug-management-344af-default-rtdb.firebaseio.com/dashboards/3/.json"); 
        const data = await response.json();
  
        console.log("Fetched Allergy Data:", data);
  
       
        return Array.isArray(data?.values) ? { values: data.values } : { values: [] };
    } catch (error) {
        console.error("Error fetching allergy data:", error);
        return { values: [] };
    }
  };
  export default allergyLoader;