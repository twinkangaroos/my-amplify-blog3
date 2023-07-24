/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Dog } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import DogComponent from "./DogComponent";
import { Collection } from "@aws-amplify/ui-react";
export default function DogComponentCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Dog,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          MShop: await item.MShop,
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "DogComponentCollection")}
      {...rest}
    >
      {(item, index) => (
        <DogComponent
          dog={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></DogComponent>
      )}
    </Collection>
  );
}
