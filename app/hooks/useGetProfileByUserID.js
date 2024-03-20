import useSWR from 'swr'
 

export default function useGetProfileByUserID (id) {
    const fetcher = async (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(`/api/mongo/user/${id}`, fetcher);
    console.log('asdas');
   
    return {
      data: data,
      isLoading,
      isError: error
    }
  }