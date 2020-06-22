const request = require("supertest");
const server = require("./index");

test("Get request check", async () => {
  const res = await request(server).get("/");
  expect(res.status).toBe(200);
  expect(res.type).toBe("application/json");
  expect(res.body).toStrictEqual([
    {
      num: 1,
    },
    {
      num: 2,
    },
    {
      num: 3,
      class: "fizz",
    },
    {
      num: 4,
    },
    {
      num: 5,
      class: "buzz",
    },
    {
      num: 6,
      class: "fizz",
    },
    {
      num: 7,
    },
    {
      num: 8,
    },
    {
      num: 9,
      class: "fizz",
    },
    {
      num: 10,
      class: "buzz",
    },
    {
      num: 11,
    },
    {
      num: 12,
      class: "fizz",
    },
    {
      num: 13,
    },
    {
      num: 14,
    },
    {
      num: 15,
      class: "fizzbuzz",
    },
    {
      num: 16,
    },
    {
      num: 17,
    },
    {
      num: 18,
      class: "fizz",
    },
    {
      num: 19,
    },
    {
      num: 20,
      class: "buzz",
    },
    {
      num: 21,
      class: "fizz",
    },
    {
      num: 22,
    },
    {
      num: 23,
    },
    {
      num: 24,
      class: "fizz",
    },
    {
      num: 25,
      class: "buzz",
    },
    {
      num: 26,
    },
    {
      num: 27,
      class: "fizz",
    },
    {
      num: 28,
    },
    {
      num: 29,
    },
    {
      num: 30,
      class: "fizzbuzz",
    },
    {
      num: 31,
    },
    {
      num: 32,
    },
    {
      num: 33,
      class: "fizz",
    },
    {
      num: 34,
    },
    {
      num: 35,
      class: "buzz",
    },
    {
      num: 36,
      class: "fizz",
    },
    {
      num: 37,
    },
    {
      num: 38,
    },
    {
      num: 39,
      class: "fizz",
    },
    {
      num: 40,
      class: "buzz",
    },
    {
      num: 41,
    },
    {
      num: 42,
      class: "fizz",
    },
    {
      num: 43,
    },
    {
      num: 44,
    },
    {
      num: 45,
      class: "fizzbuzz",
    },
    {
      num: 46,
    },
    {
      num: 47,
    },
    {
      num: 48,
      class: "fizz",
    },
    {
      num: 49,
    },
    {
      num: 50,
      class: "buzz",
    },
    {
      num: 51,
      class: "fizz",
    },
    {
      num: 52,
    },
    {
      num: 53,
    },
    {
      num: 54,
      class: "fizz",
    },
    {
      num: 55,
      class: "buzz",
    },
    {
      num: 56,
    },
    {
      num: 57,
      class: "fizz",
    },
    {
      num: 58,
    },
    {
      num: 59,
    },
    {
      num: 60,
      class: "fizzbuzz",
    },
    {
      num: 61,
    },
    {
      num: 62,
    },
    {
      num: 63,
      class: "fizz",
    },
    {
      num: 64,
    },
    {
      num: 65,
      class: "buzz",
    },
    {
      num: 66,
      class: "fizz",
    },
    {
      num: 67,
    },
    {
      num: 68,
    },
    {
      num: 69,
      class: "fizz",
    },
    {
      num: 70,
      class: "buzz",
    },
    {
      num: 71,
    },
    {
      num: 72,
      class: "fizz",
    },
    {
      num: 73,
    },
    {
      num: 74,
    },
    {
      num: 75,
      class: "fizzbuzz",
    },
    {
      num: 76,
    },
    {
      num: 77,
    },
    {
      num: 78,
      class: "fizz",
    },
    {
      num: 79,
    },
    {
      num: 80,
      class: "buzz",
    },
    {
      num: 81,
      class: "fizz",
    },
    {
      num: 82,
    },
    {
      num: 83,
    },
    {
      num: 84,
      class: "fizz",
    },
    {
      num: 85,
      class: "buzz",
    },
    {
      num: 86,
    },
    {
      num: 87,
      class: "fizz",
    },
    {
      num: 88,
    },
    {
      num: 89,
    },
    {
      num: 90,
      class: "fizzbuzz",
    },
    {
      num: 91,
    },
    {
      num: 92,
    },
    {
      num: 93,
      class: "fizz",
    },
    {
      num: 94,
    },
    {
      num: 95,
      class: "buzz",
    },
    {
      num: 96,
      class: "fizz",
    },
    {
      num: 97,
    },
    {
      num: 98,
    },
    {
      num: 99,
      class: "fizz",
    },
    {
      num: 100,
      class: "buzz",
    },
  ]);
});
