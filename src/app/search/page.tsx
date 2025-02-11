import Link from "next/link";
import { Suspense } from "react";

import { Spacer } from "@/app/lib/ui/slate/Spacer";
import { Typography } from "@/app/lib/ui/slate/Typography";

import { LoadingResults } from "./SearchResults/LoadingResults";
import { SearchResults } from "./SearchResults/SearchResults";
import * as s from "./styles.css";

type Props = {
  searchParams: {
    q: string;
  };
};

const Search: React.FC<Props> = async ({ searchParams: { q } }) => {
  return (
    <div className={s.container}>
      <Typography>
        <Link href="/">Home</Link> / &quot;{q}&quot;
      </Typography>
      <Spacer height="24px" />
      <Typography variant="pageHeaderSerifRegular">Wholesale {q}</Typography>
      <Spacer height="8px" />
      <Typography>Results for {q}</Typography>
      <Spacer height="24px" />
      <div className={s.grid}>
        <Suspense fallback={<LoadingResults />}>
          <SearchResults q={q} />
        </Suspense>
      </div>
    </div>
  );
};

export default Search;
