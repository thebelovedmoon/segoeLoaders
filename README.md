> [!IMPORTANT]
> **this repository is being revamped to allow more control over what happens on a page.** for more information, refer to [this section](#how-to-use).

<br>

<img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Microsoft_icon.svg" alt="Microsoft logo" width="48px">

# Windows Spinners

visit the demo: https://thebelovedmoon.github.io/segoeLoaders

this page demonstrates how the familiar Windows spinners/throbbers (debuted since Windows 8) are displayed.

## how it works

this works by using the **"Segoe Boot Mono"**, which has exclusive glyphs (denoted by `U+E052` to `U+E0CB` and `U+E100` to `U+E176`) that can be used to denote the spinners by default. while there are frameworks that emulate the spinners, what makes them unique is that this is the first glyph to have the Windows 11 spinner glyph baked in.

normally, we call these glyphs "Private Use Areas" as they are normally unassigned by standard and by default.

## features and functionalities

this page has the following features and quirks:

### infinite spinner animation

this page harnesses a complex JavaScript function that makes each glyph loop endlessly. you can learn more about it in the [resources](#resources) section.

### consolidated to an AIO (all-in-one) page

this page has took a huge step in consolidation as everything will be put into a single page for easy access. on the backend, every page display will be handled through JavaScript.

(remember the term "URL Query" as this will become relevant later on.)

### two spinner versions

this page has two versions of the spinners:

- "Version 1", which is the spinner first introduced in Windows 8, and is still being used across Windows today.
- "Version 2", which is the spinner first introduced in Windows 11. it's mostly evident in boot screens and feature updates.

### two font variations

alongside spinner versions, this also has two font variations:

- `segoe_slboot.ttf`, which is the "normal" version of the font.
- `segoen_slboot.ttf`, which is the "condensed" version of the font.

if you want to view the fonts in detail, they can be located on `C:\Windows\Boot\Fonts`.

### variable FPS

this page lets you see the animations of the spinners in various FPS values!! to get started with variable FPS, see the steps in [how to use](#how-to-use) section.

## how to use

1. visit the website as noted by the link [at the beginning of this document](#windows-spinners).
2. at the URL bar, key in the following URL query: `?version={ver}&type={typ}&fps={fps}` -- where:
    - `{ver}` can be "1" or "2" (the spinner version)
    - `{type}` can be "normal" or "condensed" (the font variation)
    - `{fps}` can be any number in frames per second
3. enjoy the spinner animation!!

### can I embed it on my website?

as of 9 Sep 2026, I'm working on it!!

at the moment, I'm planning on rebuilding the page in order to be more intuitive with more functions that you can work with.

what's more, you can add some parts to your existing workflows and have them synchronized alongside the rest of your website -- like font colors, for example!!

> [!NOTE]
> updates will be carried out as soon as they're released through X at [@thebelovedmoon](https://x.com/thebelovedmoon).

## resources

- "Infinitely Cycle Through an Array" by kirupa: https://www.kirupa.com/javascript/infinitely_cycle_through_array.htm 
- "i found something in the segoe boot semilight font" by u/Fluid_Lake4958: https://www.reddit.com/r/windows/comments/176frs8/i_found_something_in_the_segoe_boot_semilight_font 
- "Private Use Areas" by Wikipedia: https://en.wikipedia.org/wiki/Private_Use_Areas 
- "URLSearchParams" (URL Query) by MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams 

## disclaimer

the fonts on this repository are (c) Microsoft Corporation, and may be considered proprietary. this repository utilizes these fonts for demonstration purposes.

the source code of this repository is MIT-licensed. you may review the LICENSE file for more details.
