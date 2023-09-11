export default function downloadDataAsJson(data, filename) {
    try {
      // Convert the data object to a JSON string
      const jsonData = JSON.stringify(data);
  
      // Create a Blob containing the JSON data
      const blob = new Blob([jsonData], { type: 'application/json' });
  
      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);
  
      // Create a link element to trigger the download
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
  
      // Trigger a click event on the link element to start the download
      a.click();
  
      // Clean up by revoking the Blob URL
      URL.revokeObjectURL(url);
  
      // Return true to indicate success
      return true;
    } catch (error) {
      // Handle any errors that might occur during the download
      console.error('Error downloading data:', error);
      return false;
    }
}
