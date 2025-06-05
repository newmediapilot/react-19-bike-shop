import * as React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import DetailDialog from "@local/components/DetailDialog";
import Search, { SearchData } from "@local/components/Search";
import Listings, { ListData, ListItem } from "@local/components/Listings";
import { useAppSelector } from "@local/composition/store";
import {
  selectList,
  selectListDetail,
  selectMode,
  selectSearch,
} from "@local/composition/selectors";
import { filterList } from "@local/transformers/filterList";
import ModeSelect from "@local/components/ModeSelect";
import Highlighter from "@local/components/Highlighter";
import _ from "lodash";

/**
 * Initial "homepage" for now
 * @constructor
 */
function Index() {
  // Query eg. "?detail="
  const [searchParams] = useSearchParams();
  const detailParam: string | null = searchParams.get("detail");

  // Redux
  const items: ListData = useAppSelector(selectList);
  const search: SearchData = useAppSelector(selectSearch);
  const mode: string = useAppSelector(selectMode);
  const detail: ListItem = useAppSelector(selectListDetail(detailParam));

  // State
  const [filtered, setFiltered] = useState<Array<any>>([]);

  // Filters
  useEffect(() => {
    const uniq = _(filterList(search, items, "id", ["title", "description"]))
      .chain()
      .uniqBy("key");
    const map = (m) => items.find((f) => f.id == m.key);
    setFiltered(
      "filter" === mode
        ? uniq
            .filter((i) => !!i.match)
            .map(map)
            .value()
        : items,
    );
  }, [search, mode]);

  // Render
  return (
    <>
      <Search />
      <ModeSelect />
      <span>{mode}</span>
      <Listings list={filtered} />
      <Highlighter list={filtered} />
      <DetailDialog detail={null !== detailParam && detail} />
    </>
  );
}

export default Index;
