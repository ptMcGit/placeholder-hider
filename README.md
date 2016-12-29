# PlaceholderHiders #

Given 7 floating items with `table` display how do you ensure that they group together to make a square?

e.g.

```
+-----+-----+
|     |     |
+-----+-----+
|     |     |
+-----+-----+
|     |     |
+-----+-----+
|     |
+-----+
```

- You can constrain the items to a single column.
- You can add placeholders.

Having decided on the latter, what happens if you add additional items?

**This module offers a solution to the last problem by hiding placeholders as needed to maintain "square" groupings**

## How To Use It ##

Add the module to the environment...

Create an instance of `PlaceholderHider` and provide the class of the content elements (this is the primary content) followed by the class of the placeholder elements:

``` JavaScript
pHH = PlaceholderHider('.itemClass', '.placeholderClass');
```
**NOTE** that there is a `.` prefix for these class names consistent with convention.

Use `gcm()` to change how many placeholders are hidden from the default value:

``` JavaScript
pHH.gcm(4)
```

Placeholders are hidden such that:

    (total primary elements + total placeholder elements) % 4 = 0

So, if you have a `gcm()` of 4 and 3 placeholder elements you can expect the following scenarios:

- With 10 primary elements, 1 placeholder is hidden `((10 + 3) % 4 = 1)`
- With 13 primary elements, no placeholders are hidden `((13 + 3) % 4 = 0)`
- And, so on.

You, of course, should provide at least `gcm()` - 1 placeholders.

Simply invoke `gcm()` with no arguments to get its value.

In order to hide placeholders, invoke `hidePlaceholders()` immediately after `PlaceholderHider` is instantiated.
Continuing with our example:

``` JavaScript
pHH.hidePlaceholders()
```

This method toggles `style.display` for the appropriate placeholders between an original value (determined when `PlaceholderHider` is instantiated) and `none`.

Additionally, if `gcm()` is set, `hidePlaceholders()` is invoked.

Also note that any change in the number of items or placeholders will require `hidePlaceholders()` to be invoked to hide/unhide placeholders appropriately.
