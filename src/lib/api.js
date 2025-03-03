export const fetchWithAuth = async (url, options = {}) => {
    const token = localStorage.getItem('token');
    
    const headers = {
      'Content-Type': 'application/ld+json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    };
  
    const response = await fetch(url, {
      ...options,
      headers,
    });
  
    if (!response.ok) {
      throw new Error('Erreur de requête');
    }
  
    return response.json();
  };