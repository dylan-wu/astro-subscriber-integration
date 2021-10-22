# ConvertKit Integration

The integration is located in src > pages > index.astro:

```html
<form action="https://app.convertkit.com/forms/[YOUR_FORM_ID]/subscriptions" method="post" data-sv-form="[YOUR_FORM_ID]" data-uid="[YOUR_UID]" data-version="5">
  <input type="email" name="email_address" placeholder="Email Address">
  <span>
      <button type="submit" data-element="submit">
          Sign Up
      </button>
  </span>
</form>
```

## Your Form ID

[YOUR_FORM_ID] is found when editing a convertkit form. The URL will look something like: https://app.convertkit.com/forms/designers/[#######]/edit

Copy the 7 digits in between "designers/" and "/edit". Paste those digits into anywhere that says [YOUR_FORM_ID]

## Data_UID

While editing a convertkit form, click the public button in the top right.

![image](https://user-images.githubusercontent.com/6586811/138515493-b57ef23e-b44d-49a3-a179-41c3a7e46942.png)

A new modal should pop up, with options to select JS, HTML, Share, Wordpress and Unbounce. Select "Share"

![image](https://user-images.githubusercontent.com/6586811/138515797-77dd9709-4093-45d3-8229-d3199d24de0f.png)

Copy the string of numbers and letters that appears after "page/" (indicated by the red underline above)

Paste that anywhere that said [YOUR_UID]

## Conclusion

If you've copied both your Form ID and your UID, you should be good to go. Just type an email into the textbox, hit submit, verify your email address, and you should see a new subscriber.

