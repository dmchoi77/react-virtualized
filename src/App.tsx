import styled from "@emotion/styled";
import { Table, WindowScroller, Column, AutoSizer } from "react-virtualized";
import "react-virtualized/styles.css";

const Wrapper = styled.div`
  /* height: 100px; */
`;

function App() {
  const getRows = (num: number) => {
    return [...Array(num).keys()].map((a) => ({
      id: a,
      name: `${a} VITE`,
      count: Math.floor(Math.random() * 100),
    }));
  };
  const rows = getRows(190);

  const VirtualizedTable = (props) => {
    return (
      <TableWrapper>
        <WindowScroller>
          {({ height, isScrolling, onChildScroll, scrollTop }) => {
            return (
              <AutoSizer disableHeight>
                {({ width }) => (
                  <Table
                    autoHeight
                    width={width}
                    rowCount={rows.length}
                    height={height}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    scrollTop={scrollTop}
                    containerStyle={{
                      height: "400px",
                      overflow: "scroll",
                    }}
                    {...props}
                  />
                )}
              </AutoSizer>
            );
          }}
        </WindowScroller>
      </TableWrapper>
    );
  };

  return (
    <div
      css={{
        height: "400px",
      }}
    >
      <div
        css={{
          height: "50%",
          background: "blue",
        }}
      ></div>
      <div
        css={{
          height: "50%",
          background: "red",
        }}
      >
        <Wrapper>
          <VirtualizedTable
            rowHeight={40}
            headerHeight={50}
            rowCount={rows.length}
            rowGetter={({ index }: { index: number }) => rows[index]}
          >
            <Column label="Id" dataKey="id" width={100} />
            <Column label="Name" dataKey="name" width={200} />
            <Column label="Count" dataKey="count" width={100} />
          </VirtualizedTable>
        </Wrapper>
      </div>
    </div>
  );
}

export default App;

const TableWrapper = styled.div`
  .ReactVirtualized__Table {
  }

  .ReactVirtualized__Table__headerColumn {
    color: blue;
  }

  .ReactVirtualized__Table__headerRow {
    background: palevioletred;
    border: 1px solid gray;
    position: sticky;
  }

  .ReactVirtualized__Table__row {
    background: papayawhip;
    border-right: 1px solid gray;
    border-left: 1px solid gray;
    border-bottom: 1px solid gray;
  }

  .ReactVirtualized__Table__rowColumn {
  }

  .ReactVirtualized__Table__sortableHeaderColumn {
  }

  .ReactVirtualized__Table__sortableHeaderIcon {
  }
`;
