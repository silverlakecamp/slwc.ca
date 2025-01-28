<template>
  <div>
    <v-container>
      <h1>Newsletter Signup</h1>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <v-flex md12>
          <p>
            Hear the incredible stories of God's work here, and keep in touch
            with the pulse of the Camp in our Email Newsletter.
          </p>
          <p>
            If you would like to begin praying for Silver Lake, our newsletter
            is a great way to keep in touch.
          </p>

          <div id="mc_embed_signup">
            <form
              action="https://slwc.us11.list-manage.com/subscribe/post?u=8e2229c1bda9a3864f0aa9c04&amp;id=23a1427453&amp;f_id=00adc6e3f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
            >
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe</h2>
                <div class="indicates-required">
                  <span class="asterisk">*</span> indicates required
                </div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL"
                    >Email Address <span class="asterisk">*</span></label
                  ><input
                    type="email"
                    name="EMAIL"
                    class="required email"
                    id="mce-EMAIL"
                    required=""
                    value=""
                  />
                </div>
                <div class="mc-field-group">
                  <label for="mce-FNAME">First Name </label
                  ><input
                    type="text"
                    name="FNAME"
                    class="text"
                    id="mce-FNAME"
                    value=""
                  />
                </div>
                <div class="mc-field-group">
                  <label for="mce-LNAME">Last Name </label
                  ><input
                    type="text"
                    name="LNAME"
                    class="text"
                    id="mce-LNAME"
                    value=""
                  />
                </div>
                <div class="mc-field-group input-group">
                  <strong>Sign me up for Newsletter Updates </strong>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        name="group[4121][4]"
                        id="mce-group[4121]-4121-0"
                        value=""
                      /><label for="mce-group[4121]-4121-0"
                        >Newsletter Subscribers</label
                      >
                    </li>
                  </ul>
                </div>
                <div id="mce-responses" class="clear">
                  <div
                    class="response"
                    id="mce-error-response"
                    style="display: none"
                  ></div>
                  <div
                    class="response"
                    id="mce-success-response"
                    style="display: none"
                  ></div>
                </div>
                <div
                  aria-hidden="true"
                  style="position: absolute; left: -5000px"
                >
                  <input
                    type="text"
                    name="b_8e2229c1bda9a3864f0aa9c04_23a1427453"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <div class="clear">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                    value="Subscribe"
                  />
                </div>
              </div>
            </form>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "NewsletterSignup",
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "//cdn-images.mailchimp.com/embedcode/classic-061523.css",
          type: "text/css",
        },
      ],
      script: [
        {
          src: "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js",
          body: true,
          defer: true,
        },
      ],
    };
  },
  mounted() {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = "EMAIL";
    ftypes[0] = "email";
    fnames[1] = "FNAME";
    ftypes[1] = "text";
    fnames[2] = "LNAME";
    ftypes[2] = "text";
    window.jQuery &&
      (function ($) {
        window.jQuery.extend($.fn, {
          validateMailchimp: function () {
            if (window.jQuery.validator) {
              window.jQuery.validator.addMethod(
                "email",
                function (value, element) {
                  return (
                    this.optional(element) ||
                    /[a-z]+@[a-z]+\.[a-z]+/.test(value)
                  );
                },
                "No email provided."
              );
            }
            return true;
          },
        });
      })(window.jQuery);
  },
};
</script>

<style>
#mc_embed_signup {
  background: #fff;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
  width: 600px;
}
</style>
