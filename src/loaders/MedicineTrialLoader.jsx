const medicineTrialsLoader = async () => {
    try {
      const response = await fetch("https://medicine-management-syst-b12fe-default-rtdb.firebaseio.com/dashboards/2/.json");
      const fetchedData = await response.json();
  
      console.log("Loader Data:", fetchedData); 
  
      return fetchedData;
    } catch (error) {
      console.error("Error fetching medicine trials:", error);
      return { title: "Medicine Trials", values: [] };
    }
  };
  export default medicineTrialsLoader;