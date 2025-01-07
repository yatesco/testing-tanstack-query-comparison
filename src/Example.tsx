import { useQuery } from "@tanstack/react-query";

const fetchRepoData = (): Promise<{ name: string }> =>
  fetch("https://api.github.com/repos/tannerlinsley/react-query")
    .then((response) => response.json())
    .then((data) => data);

export function Example() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: fetchRepoData,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error)
    return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      <h1>name: {data?.name}</h1>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}
