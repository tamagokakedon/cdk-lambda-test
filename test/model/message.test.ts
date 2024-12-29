import { message } from "../../src/model/message";

test('正しいメッセージの返却', () => {
    expect(message("hoge")).toEqual(`Hello CDK! hoge\n`)
})