const fetchDashboardData = async () => {
    const response = await fetch("https://medicine-management-syst-b12fe-default-rtdb.firebaseio.com/dashboards.json");
    if (!response.ok) throw new Error("Failed to fetch dashboard data");
    return response.json();
  };
  export default fetchDashboardData;

