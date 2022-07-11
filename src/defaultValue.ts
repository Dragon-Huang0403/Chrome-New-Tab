export const defaultWidgets = [
  {
    type: 'clock',
    style: { showSeconds: false },
    data: {},
    defaultLayout: { w: 20, h: 10 },
    limit: { minW: 2, maxW: 40, minH: 1, maxH: 20 },
    menu: [] as string[],
    id: '310b0456-d692-4297-a235-08659c19459a',
  },
  {
    type: 'note',
    style: {},
    data: {
      title: 'TabShaker',
      content:
        '{"root":{"children":[{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Customized your Tab ✌️✌️","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"number","start":1,"tag":"ol"},{"children":[{"children":[{"children":[{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"Move ","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"widgets around","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":1},{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"Resize","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" widgets","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":2},{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"Add","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":" new widget🧰 (left-top corner)","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":3},{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"Remove widget from widget\'s menu","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":4},{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"Different screen size different layout","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":5}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Google Menu 🦾🦾 (right-top corner)","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":2}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"number","start":2,"tag":"ol"},{"children":[{"children":[{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Connect to useful Google apps","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":1}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"}],"direction":null,"format":"","indent":0,"type":"listitem","version":1,"value":1}],"direction":null,"format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Background Wallpaper Controller🖼️ (bottom)","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":3}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"number","start":3,"tag":"ol"},{"children":[{"children":[{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Auto play ⏯️ (30seconds)","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Manually switch⏮️ ⏭️","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":2}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"News 📰📰📰","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":4}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"number","start":4,"tag":"ol"},{"children":[{"children":[{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Select country for top headlines","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":1}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1},{"children":[{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"News data from News API","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":1}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Weather☁️","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":5}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"number","start":5,"tag":"ol"},{"children":[{"children":[{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Show weather of today and two dats after","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Auto locate current position","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":2},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Various styles in different size","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":3},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click city to change location","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":4},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Weather data from CWB","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":5},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Geocode reversed from OpenStreetMap","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":6}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Calendar✨✨","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":6}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"number","start":6,"tag":"ol"},{"children":[{"children":[{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Sync with Google Calendar","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Various styles in different size","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":2}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Tods List ✅ ✅ ✅ ","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":7}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"number","start":7,"tag":"ol"},{"children":[{"children":[{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click inbox to change title","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Created todo editable","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":2}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1},{"children":[{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Filter active/completed todos","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":1}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"}],"direction":null,"format":"","indent":0,"type":"listitem","version":1,"value":1}],"direction":null,"format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"English Card 🧠🧠","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":8}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"number","start":8,"tag":"ol"},{"children":[{"children":[{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Switch Example/Definition ☝️","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Various levels","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":2},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Play pronunciation 🔉","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":3},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Switch prev/next word","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":4},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Get fresh new words🔀","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":5}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Clock🕛🕛🕛","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":9}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"number","start":9,"tag":"ol"},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Note 📓📓📓","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":10}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"number","start":10,"tag":"ol"},{"children":[{"children":[{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"As you see","type":"text","version":1}],"direction":"ltr","format":"","indent":1,"type":"listitem","version":1,"value":1}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
    },
    defaultLayout: { w: 10, h: 10 },
    limit: { minW: 3, maxW: 10, minH: 3, maxH: 10 },
    menu: [] as string[],
    id: '214c1669-737e-497e-b5d5-401d175055e5',
  },
  {
    type: 'weather',
    style: {},
    data: {},
    defaultLayout: { w: 13, h: 8 },
    limit: { minW: 5, maxW: 13, minH: 4, maxH: 8 },
    menu: [] as string[],
    id: '06d88593-9298-4afd-86ab-0a9b3fb8cd50',
  },
  {
    type: 'news',
    style: {},
    data: { tag: 'United States' },
    defaultLayout: { w: 13, h: 12 },
    limit: { minW: 11, maxW: 16, minH: 8, maxH: 20 },
    menu: ['Taiwan', 'United States'] as string[],
    id: '80e040bc-0086-400c-8c30-cd995d3f4ff1',
  },
  {
    type: 'calendar',
    style: {},
    data: {},
    defaultLayout: { w: 14, h: 12 },
    limit: { minW: 11, maxW: 20, minH: 10, maxH: 20 },
    menu: [] as string[],
    id: 'e362cc12-4eeb-43f4-885e-38ce52b7dd14',
  },
] as const;

export const defaultLayouts = {
  sm: [
    { x: 0, y: 1, w: 20, h: 13, id: '310b0456-d692-4297-a235-08659c19459a' },
    { x: 0, y: 14, w: 20, h: 14, id: '214c1669-737e-497e-b5d5-401d175055e5' },
    { x: 0, y: 35, w: 16, h: 10, id: '06d88593-9298-4afd-86ab-0a9b3fb8cd50' },
    { x: 0, y: 45, w: 15, h: 30, id: '80e040bc-0086-400c-8c30-cd995d3f4ff1' },
    { x: 0, y: 75, w: 20, h: 21, id: 'e362cc12-4eeb-43f4-885e-38ce52b7dd14' },
  ],
  m: [
    { x: 0, y: 0, w: 26, h: 13, id: '310b0456-d692-4297-a235-08659c19459a' },
    { x: 0, y: 13, w: 18, h: 11, id: '214c1669-737e-497e-b5d5-401d175055e5' },
    { x: 18, y: 13, w: 8, h: 6, id: '06d88593-9298-4afd-86ab-0a9b3fb8cd50' },
    { x: 0, y: 45, w: 15, h: 30, id: '80e040bc-0086-400c-8c30-cd995d3f4ff1' },
    { x: 0, y: 75, w: 21, h: 21, id: 'e362cc12-4eeb-43f4-885e-38ce52b7dd14' },
  ],
  md: [
    { w: 20, h: 10, x: 0, y: 1, id: '310b0456-d692-4297-a235-08659c19459a' },
    { x: 20, y: 1, w: 12, h: 10, id: '214c1669-737e-497e-b5d5-401d175055e5' },
    { x: 0, y: 11, w: 7, h: 7, id: '06d88593-9298-4afd-86ab-0a9b3fb8cd50' },
    { x: 20, y: 11, w: 12, h: 12, id: '80e040bc-0086-400c-8c30-cd995d3f4ff1' },
    { x: 0, y: 44, w: 21, h: 21, id: 'e362cc12-4eeb-43f4-885e-38ce52b7dd14' },
  ],
  l: [
    { x: 0, y: 1, w: 20, h: 11, id: '310b0456-d692-4297-a235-08659c19459a' },
    { x: 0, y: 13, w: 20, h: 16, id: '214c1669-737e-497e-b5d5-401d175055e5' },
    { x: 32, y: 1, w: 8, h: 6, id: '06d88593-9298-4afd-86ab-0a9b3fb8cd50' },
    { x: 20, y: 15, w: 12, h: 14, id: '80e040bc-0086-400c-8c30-cd995d3f4ff1' },
    { x: 20, y: 1, w: 12, h: 14, id: 'e362cc12-4eeb-43f4-885e-38ce52b7dd14' },
  ],
  lg: [
    { x: 13, y: 1, w: 25, h: 11, id: '310b0456-d692-4297-a235-08659c19459a' },
    { x: 13, y: 13, w: 15, h: 13, id: '214c1669-737e-497e-b5d5-401d175055e5' },
    { x: 40, y: 1, w: 7, h: 7, id: '06d88593-9298-4afd-86ab-0a9b3fb8cd50' },
    { x: 0, y: 1, w: 11, h: 20, id: '80e040bc-0086-400c-8c30-cd995d3f4ff1' },
    { x: 28, y: 13, w: 14, h: 15, id: 'e362cc12-4eeb-43f4-885e-38ce52b7dd14' },
  ],
  xl: [
    { x: 19, y: 0, w: 24, h: 12, id: '310b0456-d692-4297-a235-08659c19459a' },
    { x: 19, y: 12, w: 24, h: 16, id: '214c1669-737e-497e-b5d5-401d175055e5' },
    { w: 13, h: 8, x: 47, y: 4, id: '06d88593-9298-4afd-86ab-0a9b3fb8cd50' },
    { x: 2, y: 0, w: 13, h: 20, id: '80e040bc-0086-400c-8c30-cd995d3f4ff1' },
    { x: 47, y: 12, w: 13, h: 16, id: 'e362cc12-4eeb-43f4-885e-38ce52b7dd14' },
  ],
  xxl: [
    { x: 21, y: 0, w: 27, h: 13, id: '310b0456-d692-4297-a235-08659c19459a' },
    { x: 24, y: 14, w: 20, h: 20, id: '214c1669-737e-497e-b5d5-401d175055e5' },
    { x: 54, y: 0, w: 16, h: 10, id: '06d88593-9298-4afd-86ab-0a9b3fb8cd50' },
    { x: 1, y: 0, w: 15, h: 30, id: '80e040bc-0086-400c-8c30-cd995d3f4ff1' },
    { x: 49, y: 14, w: 21, h: 21, id: 'e362cc12-4eeb-43f4-885e-38ce52b7dd14' },
  ],
};
