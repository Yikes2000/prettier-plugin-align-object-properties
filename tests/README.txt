
To test against different versions of Prettier, please run separately:

    tests    $ cd v2-test
    v2-test  $ pnpm i
    v2-test  $ npx vitest run

    tests    $ cd v3-test
    v3-test  $ pnpm i
    v3-test  $ npx vitest run

Babel (Javascript) align-object-properties tests:

    v3-test/babel/

        align-obj-prop/
            back-ticks.test.ts
            comment.test.ts
            func-context.test.ts
            grouping.test.ts
            nesting.test.ts
            options.test.ts

Typescript and v2-test share the same tests (symlink).

