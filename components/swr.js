import useSWR from "swr";

const Swr = (api) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(`/api/${api}`, fetcher);

  if (error) return console.log(error);
  if (!data) return null;

  return data;
};

export default Swr;
