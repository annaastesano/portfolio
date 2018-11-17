
const eventTemplate = `
<li class="aa-event" data-js-event>
<div class="aa-event__date">
    {{formatDate date}}
</div>
<div class="aa-event__content-wrp">
<div class="aa-event__content">
    <div class="aa-event__content-header">
        <span class="aa-event__title">
            {{title}}
        </span>
        {{#if orchestra }}
        <span class="aa-event__orchestra">
            {{orchestra}}
        </span>
        {{/if}}
    </div>
    <div class="aa-event__content-sub-header">
        {{#if hide_hour }}
        {{else}}
        <span class="aa-event__hour">
            {{formatTime date}},
        </span>
        {{/if}}
        <span class="aa-event__where">
        {{where}}
        </span>
    </div>
    </div>


    <div class="aa-event__content-more">
    {{#if conductor }}
        <div class="aa-event__conductor">
            <span class="aa-u-bold"> Conductor:</span> {{conductor}}
        </div>
    {{/if}}
    {{#if programme }}
    <div class="aa-event__programme">
        <span class="aa-u-bold"> Programme:</span> {{programme}}
    </div>
    {{/if}}
    {{#if more_info }}
    <div class="aa-event__description">
        {{{more_info}}}
    </div>
    {{/if}}
    </div>
</div>
{{#if maps_link }}
    <a href="{{maps_link}}" target="_blank" class="aa-event__maps-link">
    <img src="/static/images/icons/map.svg" title="See on google maps" class="link__icon link__icon--map">
    </a>
{{/if}}
<button class="aa-event__toggle-more">
    <img src="/static/images/icons/more.svg" alt="" class="link__icon">
</button>

</li>
`;

export default eventTemplate