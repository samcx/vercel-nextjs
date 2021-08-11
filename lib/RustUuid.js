import { v4 } from "@napi-rs/uuid";

export default function GenerateRustFancyID() {
  return v4();
}