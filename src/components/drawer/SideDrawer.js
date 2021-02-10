import React from 'react';
import { Drawer, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import laptop from '../../images/laptop.jpg';
const SideDrawer = () => {
  const dispatch = useDispatch();
  const { drawer, cart } = useSelector((state) => ({ ...state }));
  const imageStyle = {
    width: '100%',
    height: '50px',
    objectFit: 'cover',
  };
  return (
    <Drawer
      className='text-center'
      title={`Cart /${cart.length} Product`}
      visible={drawer}
      onClose={() => {
        dispatch({
          type: 'SET_VISIBLE',
          payload: false,
        });
      }}
    >
      {cart.map((p) => (
        <div className='row' key={p._id}>
          <div className='col'>
            {p.images[0] ? (
              <>
                <img src={p.images[0].url} style={imageStyle} />
                <p className='text-center bg-secondary text-light'>
                  {p.title} x {p.count}
                </p>
              </>
            ) : (
              <>
                <img src={laptop} />
                <p className='text-center bg-secondary text-light'>
                  {p.title} x {p.count}
                </p>
              </>
            )}
          </div>
        </div>
      ))}

      <Link to='/cart'>
        <button
          className='text-center btn btn-primary btn-raised btn-block'
          onClick={() =>
            dispatch({
              type: 'SET_VISIBLE',
              payload: false,
            })
          }
        >
            GO TO CART
        </button>
      </Link>
    </Drawer>
  );
};

export default SideDrawer;
