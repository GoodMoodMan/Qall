import useSWR from 'swr'
 

export default function useCheckUserByCreds (shouldFetch , email,password) {
    const fetcher = async (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(shouldFetch ? `/api/auth/signin` : null, fetcher);
    console.log('useCheckUser');
   
    return {
      data: data,
      isLoading,
      isError: error
    }
  }