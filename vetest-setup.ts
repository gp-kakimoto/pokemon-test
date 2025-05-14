import "@testing-library/jest-dom/vitest";
import { beforeAll, afterAll, afterEach} from "vitest";
import { APIServer } from "./src/test/server";
beforeAll(() => APIServer.listen());
afterAll(() => APIServer.close());
afterEach(() => APIServer.resetHandlers());