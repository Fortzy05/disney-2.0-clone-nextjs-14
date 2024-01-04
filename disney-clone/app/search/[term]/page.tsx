import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

function SearchhPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  // API call to get the Searched Movies
  // API call to get the Popular Movies
  return <div>welcome to the search page: {termToUse}</div>;
}

export default SearchhPage;
