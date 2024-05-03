import type { ParserOptions, Plugin } from 'prettier';
import { alignObjectProp } from './align-obj-prop';

/**
 * Parser pre-process source code.
 */
export function preprocess(code: string, options: ParserOptions): string {
    return code;
}

/**
 * Parser post-process source code.
 */
export function postprocess(code: string, options: ParserOptions): string {

    // Align object properties
    code = alignObjectProp(code, options);

    return code;
}

/**
 * Helper function to collect plugins from default parser, given a language by name.
 *
 * @param options  Parser options.
 * @param languageName  Name of language.  If blank, then return an empty array.
 * @returns an array of parsers for the given language.
 */
export function filterByLanguage(options: ParserOptions, languageName?: string): Plugin[] {
    //
    if (!languageName) {
        return [];
    }

    const plugins = options.plugins.filter(
        (plugin) => typeof plugin !== 'string'
    ) as Plugin[];

    return plugins.filter(
        (plugin) => plugin.languages?.some((language) => language.name === languageName)
    );
}
