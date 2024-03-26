# Lecture

## Notes and business:

- This week will be strange. Taking some bereavement time so this lecture is async and office hours will be mostly helping through discord as I'm able.
- We're tentatively going to do a little bit of dancing around next week switching back to p5 but taking a more theoretical approach. Normally I'd like to finish React, but seeing that I'm travelling and it would require another async week, we'll switch our scheduled week 10 with week 11 and start the theorhetical portion of our course next week. Then week 11 we'll finish off React.
- We're going to learn about controlled React forms this week. There are a few ways to deal with forms, and this one isn't necessarily the best. But it is consistent with what we've learned already so we're using this approach. If you're interested in a more robust way to deal with large form, let me know on discord and we can discuss it more there.
- If you have questions or are feeling stuck this week reach out on discord. Your fellow classmates have proven to be very resourceful and they have often answered questions before I have (which I'm grateful for). I will be checking discord as much as I can and responding however I can.
- I'm going to regret saying this, but please consider this week's deadlines as somewhere between "suggestions" and "really try to hit but if you don't I'll understand and can help where I can". I will most likely be reviewing the work from this week week 12. Let's shoot to have everything done by the time that begins.

## Some ideas behind React forms.

- The developer has to make some choices. Do we want to control what the values of the form elements are or are we going to let the browser take more control.
- Dev control is refered to "Controlled" and we will be listening to user events to set state variables and then setting the input values with those state variables.
- "Uncontrolled" means we let the users set the form inputs directly. To check the values we use DOM references (like `document.getElementById` or the hook `useRef`) and then works with those values.
- They're both good, but we're using "Controlled" because of what we've already learned.
- There are some really fantastic 3rd party libraries that can take over a lot of the repetitive stuff but we'll focus on purely React solutions first.

## Demo will be doing the exercises

## Collection Data
- [x]  Form
- [x]  Fieldset
- [ ]  Text input
- [ ]  Single checkbox
- [ ]  Checkbox group
- [ ]  Radio group
- [ ]  Select

## Validating Data
- [ ] Required fields
- [ ] Min/max length
- [ ] Matching character
- [ ] Regex (oh my!)

## Single Checkbox