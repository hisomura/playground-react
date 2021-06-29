import { FC } from "react";
import useSWR from "swr/esm";

type User = {
  id: string;
  name: string;
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Swr: FC = (_props) => {
  const { data } = useSWR<User[]>("https://jsonplaceholder.typicode.com/users", fetcher);

  if (!data) return <div>not found</div>;

  return (
    <>
      {data?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};

export default Swr;
