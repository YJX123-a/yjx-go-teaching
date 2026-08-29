if (typeof COURSES === 'undefined') var COURSES = [];
COURSES.push({
    id: 1,
    title: "棋盘布局介绍",
    content: `
      <h3>认识围棋棋盘</h3>
      <p>围棋棋盘由<span class="highlight">横纵各19条线</span>交叉组成，形成361个交叉点。为了便于入门学习，我们先从<span class="highlight">9路小棋盘</span>开始，它的规则和19路棋盘完全一致，只是规模更小。</p>
      <p>棋子要落在<span class="highlight">线与线的交叉点</span>上，而不是格子里。这是围棋和其他棋类很重要的一个区别。</p>
      <div class="key-point">关键概念：棋盘上有9个特别的点叫做<strong>星位</strong>，用小圆点标记。正中央的星位叫做<strong>天元</strong>，是棋盘的中心。</div>
      <h3>坐标与方位</h3>
      <p>棋盘的横向用字母 <span class="highlight">A 到 I</span> 标记（9路盘），纵向用数字 <span class="highlight">1 到 9</span> 标记。每个交叉点都有唯一的坐标，比如中央天元就是 <strong>E5</strong>。</p>
      <p>记住棋盘的四个角、四条边和中央天元的位置，是后续学习布局的基础。</p>
    `,
    questions: [
      {
        prompt: "请点击棋盘的「天元」位置（棋盘正中央的星位）",
        board: Array(9).fill(null).map(() => Array(9).fill(0)),
        turn: null,
        answers: [{row: 4, col: 4}],
        hint: "天元在棋盘正中央，也就是 E5 的位置"
      },
      {
        prompt: "请点击棋盘「左上角」的星位",
        board: Array(9).fill(null).map(() => Array(9).fill(0)),
        turn: null,
        answers: [{row: 2, col: 2}],
        hint: "左上角星位在 C7 的位置（从左数第3列，从上数第3行）"
      }
    ]
  },
  {
    id: 2,
    title: "如何落子",
    content: `
      <h3>落子的基本规则</h3>
      <p>围棋由<span class="highlight">黑棋先行</span>，双方轮流在棋盘的空交叉点上放置棋子。棋子落下后<span class="highlight">不能移动</span>，也不能拿走（除非被对方提掉）。</p>
      <div class="key-point">落子三原则：① 必须落在空的交叉点上；② 落子后不能移动；③ 不能落在「禁着点」上。</div>
      <h3>什么是禁着点</h3>
      <p>如果一个点被己方棋子落入后，这颗棋子（或它连接的棋块）<span class="highlight">没有任何气</span>，同时又不能提掉对方的棋子，那么这个点就是<span class="highlight">禁着点</span>，不允许落子。</p>
      <p>简单来说：<strong>下进去就会死的地方，不能下</strong>。这就像不能主动跳进一口没有出口的井里。</p>
      <h3>逃子与安全落子</h3>
      <p>当你的棋子被对方围住、只剩最后一口气时，这叫<span class="highlight">被打吃</span>。此时你需要尽快在有气的地方落子来逃出，或者连接到其他己方棋子上获得更多的气。</p>
    `,
    questions: [
      {
        prompt: "请点击黑棋的「禁着点」——黑棋下进去会没有气的位置",
        board: (() => {
          const b = Array(9).fill(null).map(() => Array(9).fill(0));
          b[3][4] = 2; b[5][4] = 2; b[4][3] = 2; b[4][5] = 2;
          return b;
        })(),
        turn: null,
        answers: [{row: 4, col: 4}],
        hint: "被四颗白子团团围住的中心点，黑棋下进去就没有气了——这是禁着点，不能落子"
      },
      {
        prompt: "黑棋被打吃了！请点击黑棋应该落子逃子的位置",
        board: (() => {
          const b = Array(9).fill(null).map(() => Array(9).fill(0));
          b[4][4] = 1;
          b[3][4] = 2; b[4][3] = 2; b[4][5] = 2;
          return b;
        })(),
        turn: 1,
        answers: [{row: 5, col: 4}],
        hint: "黑棋只剩下方一口气了，在那里落子可以向外逃出"
      }
    ]
  },
  {
    id: 3,
    title: "气",
    content: `
      <h3>什么是气</h3>
      <p><span class="highlight">气</span>是围棋中最核心的概念之一。一颗棋子在棋盘上，与它<span class="highlight">上下左右直接相邻</span>的空交叉点，就是这颗棋子的气。</p>
      <div class="key-point">一颗在棋盘中间的棋子有 <strong>4 口气</strong>；在边上的棋子有 <strong>3 口气</strong>；在角上的棋子只有 <strong>2 口气</strong>。</div>
      <h3>连接的棋子共享气</h3>
      <p>同色棋子如果在横竖方向上相邻（不包括斜向），它们就<span class="highlight">连接成一个整体</span>，共享所有的气。连接在一起的棋子越多，通常气也越多，也就越安全。</p>
      <h3>紧气与打吃</h3>
      <p>把棋子下在对方的气点上，就叫<span class="highlight">紧气</span>。当一块棋只剩下最后一口气时，就叫做<span class="highlight">被打吃</span>（叫吃）。下一手如果再紧一口气，就能把这块棋提掉。</p>
      <p>学会数气是判断一块棋死活、决定攻防策略的基础。</p>
    `,
    questions: [
      {
        prompt: "请点击图中黑棋的任意一口气",
        board: (() => {
          const b = Array(9).fill(null).map(() => Array(9).fill(0));
          b[4][4] = 1;
          return b;
        })(),
        turn: null,
        answers: [{row:3,col:4},{row:5,col:4},{row:4,col:3},{row:4,col:5}],
        hint: "黑棋上下左右四个相邻的空点都是它的气"
      },
      {
        prompt: "两颗黑子连接在一起了，请点击这块黑棋的任意一口气",
        board: (() => {
          const b = Array(9).fill(null).map(() => Array(9).fill(0));
          b[4][4] = 1; b[4][5] = 1;
          return b;
        })(),
        turn: null,
        answers: [{row:3,col:4},{row:3,col:5},{row:5,col:4},{row:5,col:5},{row:4,col:3},{row:4,col:6}],
        hint: "连接的棋子共享气，数一数这块黑棋周围有多少个空点"
      },
      {
        prompt: "黑棋只剩最后一口气了！白棋下在哪里可以提掉黑棋？",
        board: (() => {
          const b = Array(9).fill(null).map(() => Array(9).fill(0));
          b[4][4] = 1; b[4][5] = 1;
          b[3][4] = 2; b[3][5] = 2;
          b[4][3] = 2; b[4][6] = 2;
          b[5][5] = 2;
          return b;
        })(),
        turn: 2,
        answers: [{row: 5, col: 4}],
        hint: "黑棋只剩左下方一口气了，白棋下在那里就能提掉整块黑棋"
      }
    ]
  },
  {
    id: 4,
    title: "连接与切断",
    content: `
      <h3>棋子的连接</h3>
      <p>同色棋子在<span class="highlight">横竖方向相邻</span>时，就连接成了一个不可分割的整体。连接后的棋子<span class="highlight">共享所有的气</span>，一块棋的气越多，就越不容易被吃掉。</p>
      <div class="key-point">连接的意义：把分散的棋子连起来，可以增加气数、壮大力量，是防守的基本手段。</div>
      <h3>切断对方</h3>
      <p>反过来，如果在对方两块棋中间落子，阻止它们连接，就叫做<span class="highlight">切断</span>（简称「断」）。被切断的棋子会变成两块独立的棋，各自只有少量的气，更容易被分别攻击。</p>
      <p>围棋中有一句谚语：<span class="highlight">「棋从断处生」</span>。切断是进攻的开始，很多精彩的战术都是从切断对方展开的。</p>
      <h3>连接与切断的判断</h3>
      <p>当两块己方棋子中间只有一个空点时，这个点就是双方争夺的要点：你下在这里就是连接，对方下在这里就是切断。这样的点叫做<span class="highlight">要点</span>，必须优先抢占。</p>
    `,
    questions: [
      {
        prompt: "黑棋下在哪里可以把两颗黑子连接起来？",
        board: (() => {
          const b = Array(9).fill(null).map(() => Array(9).fill(0));
          b[4][3] = 1; b[4][5] = 1;
          return b;
        })(),
        turn: 1,
        answers: [{row: 4, col: 4}],
        hint: "两颗黑子中间的空点，下在这里就能把它们连成一体"
      },
      {
        prompt: "白棋下在哪里可以切断两颗黑子的连接？",
        board: (() => {
          const b = Array(9).fill(null).map(() => Array(9).fill(0));
          b[4][3] = 1; b[4][5] = 1;
          return b;
        })(),
        turn: 2,
        answers: [{row: 4, col: 4}],
        hint: "和上一题同一个点！白棋下在两颗黑子中间，就能把它们切断"
      }
    ]
  },
  {
    id: 5,
    title: "如何提子",
    content: `
      <h3>提子的规则</h3>
      <p>当一块对方的棋子<span class="highlight">所有的气都被堵住</span>时，这块棋就被吃掉了，需要从棋盘上拿走，这叫做<span class="highlight">提子</span>（吃子）。</p>
      <div class="key-point">提子条件：对方棋子没有气了 → 立即从棋盘上移除。提走的棋子由提子方保管，终局时计算胜负。</div>
      <h3>打吃与提子</h3>
      <p>当一块棋只剩<span class="highlight">最后一口气</span>时，就处于「打吃」状态。下一手如果轮到你，在那最后一口气上落子，就能把这块棋提掉。</p>
      <p>被打吃的一方通常需要立即应对：要么<span class="highlight">逃子</span>（在有气的方向延伸），要么<span class="highlight">弃子</span>（放弃这块棋，在别处获取利益）。</p>
      <h3>提子的意义</h3>
      <p>提子不仅能消灭对方的有生力量，被提走棋子后留下的空点还会变成你的地盘。学会敏锐地发现打吃和提子的机会，是围棋实战中最重要的基本功之一。</p>
    `,
    questions: [
      {
        prompt: "白棋被打吃了！黑棋下在哪里可以提掉这颗白子？",
        board: (() => {
          const b = Array(9).fill(null).map(() => Array(9).fill(0));
          b[4][4] = 2;
          b[3][4] = 1; b[5][4] = 1; b[4][3] = 1;
          return b;
        })(),
        turn: 1,
        answers: [{row: 4, col: 5}],
        hint: "白子只剩右边一口气了，黑棋下在那里就能提掉白子"
      },
      {
        prompt: "黑棋被打吃了！白棋下在哪里可以提掉这颗黑子？",
        board: (() => {
          const b = Array(9).fill(null).map(() => Array(9).fill(0));
          b[4][4] = 1;
          b[3][4] = 2; b[5][4] = 2; b[4][5] = 2;
          return b;
        })(),
        turn: 2,
        answers: [{row: 4, col: 3}],
        hint: "黑子只剩左边一口气了，白棋下在那里就能提掉黑子"
      },
      {
        prompt: "黑棋下在哪里可以同时打吃两块白棋？（双打吃）",
        board: (() => {
          const b = Array(9).fill(null).map(() => Array(9).fill(0));
          b[4][3] = 2; b[4][4] = 2;
          b[5][5] = 2;
          b[5][2] = 2;
          b[3][3] = 1; b[3][4] = 1;
          b[4][2] = 1; b[4][5] = 1;
          b[5][6] = 1;
          return b;
        })(),
        turn: 1,
        answers: [{row: 5, col: 4}],
        hint: "找一个点，下完后上方的白棋块和右边的白子同时只剩一口气"
      }
    ]
  },
  {
    id: 6,
    title: "眼",
    content: `
      <h3>什么是眼</h3>
      <p><span class="highlight">眼</span>是指被己方棋子完全围住的一个或多个空交叉点。眼是棋子的「避难所」——对方不能在你的眼里落子（因为那是禁着点），所以有眼的棋更加安全。</p>
      <div class="key-point">眼的要素：① 空交叉点；② 被己方棋子从四面八方围住；③ 对方无法在其中落子。</div>
      <h3>真眼与假眼</h3>
      <p>不是所有被围住的空点都是真正的眼。如果围住空点的棋子<span class="highlight">没有完全连接成一个整体</span>，对方可以通过切断来破坏这个眼，这样的眼叫做<span class="highlight">假眼</span>。</p>
      <p>简单的判断方法：在角上，真眼需要围住角点的三颗棋子都连接；在边上需要四颗；在中腹需要八颗。只要有一颗可以被对方切断，就是假眼。</p>
      <h3>两眼活棋</h3>
      <p>围棋最基本的死活规则：<span class="highlight">一块棋如果有两只真眼，就是活棋</span>，永远不会被吃掉。因为对方不可能同时在两个禁着点里落子。</p>
      <p>所以做眼是防守的终极目标，而破眼（让对方做不出两只眼）则是进攻杀棋的关键。</p>
    `,
    questions: [
      {
        prompt: "黑棋想围住中间的空点做成一只眼，但上面缺了一颗子。黑棋下在哪里可以补全这只眼？",
        board: (() => {
          const b = Array(9).fill(null).map(() => Array(9).fill(0));
          b[3][3] = 1;          b[3][5] = 1;
          b[4][3] = 1;          b[4][5] = 1;
          b[5][3] = 1; b[5][4] = 1; b[5][5] = 1;
          return b;
        })(),
        turn: 1,
        answers: [{row: 3, col: 4}],
        hint: "黑棋围住(4,4)只差上方(3,4)这一点，黑棋下在那里，围眼的八颗黑子就连接成环，中间就是一只完整的真眼"
      },
      {
        prompt: "请点击图中黑棋已经做成的「眼」的位置",
        board: (() => {
          const b = Array(9).fill(null).map(() => Array(9).fill(0));
          b[1][1] = 1; b[1][2] = 1; b[1][3] = 1;
          b[2][1] = 1;          b[2][3] = 1;
          b[3][1] = 1; b[3][2] = 1; b[3][3] = 1;
          return b;
        })(),
        turn: null,
        answers: [{row: 2, col: 2}],
        hint: "被黑棋团团围住的那个空交叉点，就是黑棋的眼"
      }
    ]
  },
  {
    id: 7,
    title: "胜负规则",
    content: `
      <h3>终局与数子</h3>
      <p>围棋的胜负由最终围地的多少决定。当双方都认为无处可下、或连续放弃着手时，棋局结束，进入<span class="highlight">终局</span>。</p>
      <p>中国规则采用<span class="highlight">数子法</span>：计算一方所有的活棋加上围住的空点，总数超过180.5子（19路盘）即胜。为了补偿黑棋先手优势，黑棋需要<span class="highlight">贴3又3/4子</span>（约7目半）。</p>
      <div class="key-point">9路盘数子：全盘共81个交叉点，平均每方40.5个。入门阶段理解"谁围的空多谁赢"即可。</div>
      <h3>活棋与死棋</h3>
      <p>终局时，<span class="highlight">有两只真眼的棋是活棋</span>，保留在棋盘上；<span class="highlight">做不出两只眼的棋是死棋</span>，需要从棋盘上拿掉，算作对方的俘虏。</p>
      <p>判断一块棋的死活是围棋最核心的能力之一。活棋即使被围住也不会被吃掉，死棋即使还在棋盘上也终将被清除。</p>
    `,
    questions: [
      {
        prompt: "请点击图中黑棋「活棋」的两只眼位（有两只眼、永远不会被吃掉的棋）",
        board: (() => {
          const b = Array(9).fill(null).map(() => Array(9).fill(0));
          for (let c = 0; c <= 4; c++) { b[0][c] = 1; b[2][c] = 1; }
          b[1][0] = 1; b[1][2] = 1; b[1][4] = 1;
          return b;
        })(),
        turn: null,
        answers: [{row:1,col:1},{row:1,col:3}],
        hint: "左上角的黑棋围住了两个分开的空点(1,1)和(1,3)——那就是两只真眼，是活棋"
      },
      {
        prompt: "终局了！右下角的白棋做不出两只眼，是「死棋」。请点击应该被拿掉的死棋区域",
        board: (() => {
          const b = Array(9).fill(null).map(() => Array(9).fill(0));
          b[6][6] = 2; b[6][7] = 2; b[6][8] = 2;
          b[7][6] = 2;          b[7][8] = 2;
          b[8][6] = 2; b[8][7] = 2; b[8][8] = 2;
          b[5][5] = 1; b[5][6] = 1; b[5][7] = 1; b[5][8] = 1;
          b[6][5] = 1; b[7][5] = 1; b[8][5] = 1;
          return b;
        })(),
        turn: null,
        answers: [{row:6,col:6},{row:6,col:7},{row:7,col:6},{row:8,col:6},{row:8,col:7},{row:8,col:8},{row:7,col:7}],
        hint: "右下角的白棋虽然围住了一个眼位，但只有这一只眼、做不出第二只眼，而且被黑棋团团包围——这是死棋"
      }
    ]
  });