import React from "react";
import { useRouter } from "next/router";

const FilteredEvent = () => {
  const router = useRouter();
  const slug = router.query;
  console.log(slug);
  return (
    <div>
      <h1>This is filtered event</h1>
    </div>
  );
};

export default FilteredEvent;
