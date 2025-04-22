

export const DeleteIphone = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/iphone/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete iPhone');
      }
  
      return { success: true };
    } catch (error) {
      console.error('Error deleting iPhone:', error);
      return { success: false, error: error.message };
    }
  };
  
export default DeleteIphone
