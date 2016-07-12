# ng2-tooltip-overlay
Angular2 tooltip directive

<a href="https://plnkr.co/edit/qmmUxn?p=preview">
  <img src="http://i.imgur.com/ezWv5Jw.png" width="50% border="1" />
</a>

## Install

1. install ng2-tooltip-overlay

        $ npm install ng2-tooltip-overlay --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['ng2-tooltip-overlay'] = 'node_modules/ng2-tooltip-overlay'
        packages['ng2-tooltip-overlay'] = { main: 'dist/index.js', defaultExtension: 'js']

3.  add ng2-tooltip.css into your html

        <link rel="stylesheet" href="https://npmcdn.com/ng2-tooltip-overlay/dist/ng2-tooltip.css" />

## Usage it in your code

1. import and add directive in your component

        import { Ng2TooltipDirective } from 'ng2-tooltip-overlay';

        @Component({
          selector: 'my-app',
          templateUrl: './app/app.tpl.html',
          directives: [ Ng2TooltipDirective ]
        })


2. You are ready. use it in your template

        <div tooltip="This is my tooltip">
          Move mouse over here to see the tooltip
        </div>

