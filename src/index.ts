import axios, { AxiosResponse } from "axios";
import { GetAll } from "./helpers/GetAll";

async function main() {
  let all = await GetAll(51.5074, 0.1278);
  console.log(all);
}

main();
