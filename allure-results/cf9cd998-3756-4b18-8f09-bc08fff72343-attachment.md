# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: myntra_xpath.spec.js >> myntra_search
- Location: tests\myntra_xpath.spec.js:149:5

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.myntra.com/boy-tshirts
Call log:
  - navigating to "https://www.myntra.com/boy-tshirts", waiting until "load"

```

# Test source

```ts
  51  | //     // Product names
  52  | //     const productNames = await page.locator("//h4[@class='product-product']").allTextContents();
  53  | 
  54  | //     // Prices
  55  | //     const priceTexts = await page.locator(
  56  | //         '//div[@class="product-price"]//span[@class="product-discountedPrice"] | //div[@class="product-price"][not(.//span[@class="product-discountedPrice"])]/span[1]'
  57  | //     ).allTextContents();
  58  | 
  59  | //     const prices = priceTexts.map(text =>
  60  | //         Number(text.replace(/[^0-9]/g, ''))
  61  | //     );
  62  | 
  63  | //     const minimumPrice = Math.min(...prices);
  64  | //     const minimumPrice = Math.min(...prices);
  65  | 
  66  | // console.log("Minimum Price:", minimumPrice);
  67  | 
  68  | // const product = page
  69  | //     .locator("//li[@class='product-base']")
  70  | //     .filter({
  71  | //         has: page.locator(
  72  | //             `//div[contains(@class,'product-price')]//*[contains(text(),'${minimumPrice}')]`
  73  | //         )
  74  | //     })
  75  | //     .first();
  76  | 
  77  | // const productName = await product
  78  | //     .locator("h4[@class='product-product']")
  79  | //     .innerText();
  80  | 
  81  | // console.log("Product Name:", productName);
  82  | 
  83  | //     console.log("Minimum Price:", minimumPrice);
  84  | //     console.log("Product Name:", minProductName);
  85  | 
  86  | // });
  87  | 
  88  | 
  89  | // import { test } from '@playwright/test';
  90  | 
  91  | // test('myntra_search', async ({ page }) => {
  92  | 
  93  | //     await page.goto('https://www.myntra.com/boy-tshirts');
  94  | 
  95  | //     await page.waitForTimeout(3000);
  96  | 
  97  | //     // Get all prices
  98  | //     const priceTexts = await page.locator(
  99  | //         '//div[@class="product-price"]//span[@class="product-discountedPrice"] | //div[@class="product-price"][not(.//span[@class="product-discountedPrice"])]/span[1]'
  100 | //     ).allTextContents();
  101 | 
  102 | //     // Convert prices to numbers
  103 | //     const prices = priceTexts
  104 | //         .map(text => Number(text.replace(/[^0-9]/g, '')))
  105 | //         .filter(Boolean);
  106 | 
  107 | //     console.log("Prices:", prices);
  108 | 
  109 | //     // Find minimum price
  110 | //     const minimumPrice = Math.min(...prices);
  111 | 
  112 | //     console.log("Minimum Price:", minimumPrice);
  113 | 
  114 | //     // Find product name using minimum price
  115 | //      // Find product name using minimum price
  116 | //     const productName = await page.locator(
  117 | //     `(//li[@class='product-base']
  118 | //         [
  119 | //         descendant::div[@class='product-price']
  120 | //         /descendant::span[@class='product-discountedPrice']
  121 | //         [contains(text(),'${minimumPrice}')]
  122 | 
  123 | //         or
  124 | 
  125 | //         descendant::div[@class='product-price']
  126 | //         [not(descendant::span[@class='product-discountedPrice'])]
  127 | //         /span[1]
  128 | //         [contains(text(),'${minimumPrice}')]
  129 | //         ]
  130 | //         /descendant::h4[@class='product-product']
  131 | //     )[1]`
  132 | //     ).innerText();
  133 | 
  134 | // console.log("Product Name:", productName);
  135 | 
  136 | // console.log(productbrand);
  137 | 
  138 |    
  139 | 
  140 | 
  141 | // console.log("Product Name:", productName);
  142 | 
  143 | // });
  144 | 
  145 | 
  146 | // 
  147 | import { test } from '@playwright/test';
  148 | 
  149 | test('myntra_search', async ({ page }) => {
  150 | 
> 151 |     await page.goto('https://www.myntra.com/boy-tshirts');
      |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.myntra.com/boy-tshirts
  152 | 
  153 |     await page.waitForTimeout(3000);
  154 | 
  155 |     // Get all prices
  156 |     const priceTexts = await page.locator(
  157 |         '//li[@class="product-base"]//div[@class="product-price"]//span[@class="product-discountedPrice"] | //li[@class="product-base"]//div[@class="product-price"]/span[not(span) and not(@class)]'
  158 |     ).allTextContents();
  159 | 
  160 |     // Convert prices to numbers
  161 |     const prices = priceTexts
  162 |         .map(text => Number(text.replace(/[^0-9]/g, '')))
  163 |         .filter(price => !isNaN(price));
  164 | 
  165 |     console.log("Prices:", prices);
  166 | 
  167 |     // Find minimum price
  168 |     const minimumPrice = Math.min(...prices);
  169 | 
  170 |     console.log("Minimum Price:", minimumPrice);
  171 | 
  172 |     // Find product name using minimum price
  173 |     const productLocator = page.locator(
  174 |   `//li[@class="product-base"]/descendant::div[@class="product-price"]/span[
  175 |     span[@class="product-discountedPrice" and text()="${minimumPrice}"]
  176 |     or
  177 |     not(@class) and text()="${minimumPrice}"
  178 |   ]//parent::div//preceding-sibling::h3`
  179 | );
  180 | 
  181 |     const productName = await productLocator.innerText();
  182 | 
  183 |     console.log("Product Name:", productName);
  184 | });
```