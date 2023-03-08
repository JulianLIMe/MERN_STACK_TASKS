import React, { Component } from 'react';

class App extends Component {

  // En el condtructor se aloja el State de este componente React y las funciones que se relacionan con este State
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      tasks: [],
      id: undefined
    }
    this.addTask = this.addTask.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  addTask(e, id) {
    e.preventDefault()

    if (!this.state.id) {
      //console.log(this.state)
      fetch('/api/task', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          console.log(res)
          M.toast({ html: 'Task Saved' })
          this.setState({ title: '', description: '' })
          this.fetchTask()
        })
        .catch(err => console.log(err))
    } else {
      //console.log('hay id', this.state.id)
      fetch(`/api/task/${this.state.id}`, {
        method: 'PUT',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          M.toast({ html: 'Task Updated' })
          this.setState({ title: '', description: '', id: undefined })
          this.fetchTask()
        })
    }

  }

  // Se ejecuta lo que esta dentro de componentDidMount() siempre que se cargue o recargue la pagina 
  componentDidMount() {
    this.fetchTask()
  }

  fetchTask() {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        this.setState({ tasks: data })
        console.log(this.state.tasks)
      })
  }

  handleChange(e) {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  deleteTask(id) {
    if (confirm('Are you sure you want to delete it?')) {
      fetch(`/api/task/${id}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(data => {
          M.toast({ html: 'Task Deleted' })
          console.log(data)
          this.fetchTask()
        })
    }
  }

  updateTask(task) {
    const { _id, title, description } = task;
    this.setState({ title, description, id: _id })
  }

  render() {
    return (
      <div>
        {/* Navigation */}
        <nav className='light-blue darken-4'>
          <div className='container'>
            <a className='brand-logo' href='/'>Mern Satck</a>
          </div>
        </nav>

        <div className='container'>
          <div className='row'>
            <div>
              <div className='col s5'>
                <div className='card'>
                  <div className='card-content'>
                    <form onSubmit={this.addTask}>
                      <div className='row'>
                        <div className='input-field col s12'>
                          <input
                            name='title'
                            onChange={this.handleChange}
                            value={this.state.title}
                            type='text'
                            placeholder='Task Title'
                          />
                        </div>
                      </div>
                      <div className='row'>
                        <div className='input-field col s12'>
                          <textarea
                            name='description'
                            onChange={this.handleChange}
                            value={this.state.description}
                            placeholder='Task Descriprion'
                            className='materialize-textarea'
                          ></textarea>
                        </div>
                      </div>
                      <button className='btn light-blue darken-4'>
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className='col s7'>
                <table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Descriprion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.tasks.map((task) => {
                        return (
                          <tr key={task._id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>
                              <button className='btn light-blue darken-4' onClick={() => this.updateTask(task)}>
                                <i className='material-icons'>update</i>
                              </button>
                              <button className='btn light-blue darken-4' style={{ margin: '4px' }} onClick={() => this.deleteTask(task._id)}>
                                <i className='material-icons'>delete</i>
                              </button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;